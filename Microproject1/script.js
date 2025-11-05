// Get modal elements
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.getElementById('close');

// Get all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

// Add click event to each item
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        let info = item.getAttribute('data-info');

        // Add more detailed info for each scientist
        switch(name) {
            case "Sir M. Visvesvaraya":
                info += " He was also the Diwan of Mysore and promoted technical education and industrialization in India.";
                break;
            case "Dr. A.P.J. Abdul Kalam":
                info += " He authored several books and was known for inspiring young minds through his speeches and writings.";
                break;
            case "Verghese Kurien":
                info += " His model made India the largest producer of milk and helped empower millions of rural farmers.";
                break;
            case "M. S. Swaminathan":
                info += " He also promoted sustainable agriculture and rural development throughout India.";
                break;
            case "Homi J. Bhabha":
                info += " He was instrumental in setting up India’s atomic energy infrastructure and research institutions.";
                break;
            case "Satish Dhawan":
                info += " Under his leadership, ISRO launched India’s first satellite, Aryabhata, successfully.";
                break;
            case "Dr. Tessy Thomas":
                info += " She also worked on India’s strategic missile program and has received several awards for her contributions.";
                break;
            case "A.S. Prasad":
                info += " He contributed to developing India’s first indigenous communication satellites and launch vehicles.";
                break;
            case "E. Sreedharan":
                info += " He is renowned for his disciplined project management and execution of complex infrastructure projects.";
                break;
            case "Dr. G. Satheesh Reddy":
                info += " He has also contributed to advanced defense technologies and has received numerous national awards.";
                break;
        }

        modalName.textContent = name;
        modalInfo.textContent = info;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
