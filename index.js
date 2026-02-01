function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  document.getElementById(pageId).classList.add('active');

  const navItems = document.querySelectorAll('.nav li');
  navItems.forEach(item => item.classList.remove('active'));

  document.getElementById('nav-' + pageId).classList.add('active');
}







fetch('./data/output.csv')
  .then(res => res.text())
  .then(csvText => {
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    const tvData = parsed.data;

    // Lọc từng nhóm TV
    const bestValue = tvData
      .filter(tv => parseFloat(tv.Avg_mode_power) <= 100)
      .sort((a,b) => parseFloat(a.Avg_mode_power) - parseFloat(b.Avg_mode_power))[0];

    const popular = tvData
      .filter(tv => parseFloat(tv.Avg_mode_power) > 100 && parseFloat(tv.Avg_mode_power) <= 200)
      .sort((a,b) => parseFloat(b.Star2) - parseFloat(a.Star2))[0];

    const premium = tvData
      .filter(tv => parseFloat(tv.Avg_mode_power) > 200 && parseFloat(tv.Avg_mode_power) <= 250)
      .sort((a,b) => parseFloat(b.Star2) - parseFloat(a.Star2))[0];

    const outdated = tvData
      .filter(tv => parseFloat(tv.Avg_mode_power) > 250)
      .sort((a,b) => parseFloat(b.Avg_mode_power) - parseFloat(a.Avg_mode_power))[0];

    // Kết hợp 4 loại
    const cards = [bestValue, popular, premium, outdated].filter(Boolean);

    renderTV(cards);
  })
  .catch(err => console.error('Error fetching CSV:', err));

function renderTV(tvs) {
  const container = document.querySelector('.tv-grid');
  container.innerHTML = '';

  // Mô tả cho từng loại TV
  const descriptions = {
    best: "Most energy efficient option for everyday viewing",
    popular: "Balanced performance and energy consumption",
    premium: "Premium picture quality with moderate efficiency",
    outdated: "High energy consumption, consider upgrading"
  };

  tvs.forEach(tv => {
    // Chọn class badge dựa theo loại
    let badgeClass = '';
    let badgeText = '';
    const power = parseFloat(tv.Avg_mode_power);
    
    if (power <= 100) {
      badgeClass = 'best';
      badgeText = 'Best Value';
    } else if (power <= 200) {
      badgeClass = 'popular';
      badgeText = 'Popular';
    } else if (power <= 250) {
      badgeClass = 'premium';
      badgeText = 'Premium';
    } else {
      badgeClass = 'outdated';
      badgeText = 'Outdated';
    }

    const card = document.createElement('div');
    card.classList.add('tv-card');

    card.innerHTML = `
      <div class="badge ${badgeClass}">${badgeText}</div>
      <h3>${tv.Brand_Reg} ${tv.Model_No}</h3>
      <p>Screen Tech: ${tv.Screen_Tech}</p>
      <p>Screen Size: ${tv.ScreenSize_Category}</p>
      <div class="energy-display">
        <div class="watt-value">${tv.Avg_mode_power}W</div>
      </div>
      <div class="cost-tag">$${calcElectricCost(tv.Avg_mode_power)}/year</div>
      <p class="description">${descriptions[badgeClass]}</p>
      <p>Sold In: ${tv.SoldIn}</p>
      <p>Star Rating: ${tv.Star2}</p>
    `;

    container.appendChild(card);
  });
}
// Hàm tính tiền điện 1 năm (4h/ngày, giá 0.35 AUD/kWh)
function calcElectricCost(powerW) {
  const hoursPerDay = 4;
  const rate = 0.35;
  const kWh = (parseFloat(powerW)/1000) * hoursPerDay * 365;
  return kWh.toFixed(2);
}

