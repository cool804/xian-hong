const detailBtn = document.getElementById('detailBtn');
const detailPanel = document.getElementById('detailPanel');

function toggleDetails() {
  const isHidden = detailPanel.hasAttribute('hidden');

  if (isHidden) {
    detailPanel.removeAttribute('hidden');
    detailBtn.setAttribute('aria-expanded', 'true');
    detailBtn.textContent = '收起資訊';
  } else {
    detailPanel.setAttribute('hidden', '');
    detailBtn.setAttribute('aria-expanded', 'false');
    detailBtn.textContent = '查看資訊';
  }
}

detailBtn.addEventListener('click', toggleDetails);
