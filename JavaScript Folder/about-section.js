let policyStatement = document.getElementById('js-hidden-content');

policyStatement.innerHTML = 'our policy statement are being updated contact our Support team for more information';

policyStatement.style.height = '100%';
policyStatement.style.display = 'flex';
policyStatement.style.alignItems = 'center';
policyStatement.style.justifyContent = 'center';

let features = document.getElementById('features-content-js');

features.innerHTML = `The UniTech team is currently working on this page. 
<br> visit again in a short while <br> <button class="features-visit-btn">Refresh page</button>`;

features.style.height = '100%';
features.style.display = 'flex';
features.style.flexDirection = 'column';
features.style.justifyContent = 'center';
features.style.alignItems = 'center';
features.style.textAlign = 'center';

const featuresBtn = document.querySelector('.features-visit-btn');

featuresBtn.addEventListener('mouseover', () => {
    featuresBtn.style.backgroundColor = 'rgb(14, 71, 156)';
});

featuresBtn.addEventListener('mouseout', () => {
    featuresBtn.style.backgroundColor = 'rgb(13, 110, 253)';
});

featuresBtn.addEventListener('click', () => {
    featuresBtn.innerText = 'Page refreshed';

    setTimeout(() => {
        featuresBtn.innerHTML = 'refresh again';
    }, 2000);

    setTimeout(() => {
        featuresBtn.innerHTML = 'Refresh page';
    }, 4000);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 4500);
})

