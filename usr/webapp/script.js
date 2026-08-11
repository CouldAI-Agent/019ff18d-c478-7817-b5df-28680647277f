document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    const itemsGrid = document.getElementById('items-grid');
    const imageInput = document.getElementById('item-image');

    // Store items in memory (would be a database in a real app)
    let items = [];

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Gather form data
        const type = document.querySelector('input[name="item-type"]:checked').value;
        const title = document.getElementById('item-title').value.trim();
        const description = document.getElementById('item-description').value.trim();
        const contact = document.getElementById('item-contact').value.trim();
        
        // Handle image processing
        const file = imageInput.files[0];
        let imageUrl = null;

        if (file) {
            // Read file as a Data URL to display locally
            const reader = new FileReader();
            reader.onload = function(event) {
                imageUrl = event.target.result;
                addNewItem(type, title, description, contact, imageUrl);
            };
            reader.readAsDataURL(file);
        } else {
            // Add without image
            addNewItem(type, title, description, contact, null);
        }
    });

    function addNewItem(type, title, description, contact, imageUrl) {
        const newItem = {
            id: Date.now(),
            type,
            title,
            description,
            contact,
            imageUrl,
            date: new Date().toLocaleDateString()
        };

        // Add to array
        items.unshift(newItem); // Add to beginning

        // Re-render UI
        renderItems();
        
        // Reset form
        form.reset();
        
        // Show brief success alert
        alert('Item successfully reported!');
    }

    function renderItems() {
        // Clear current grid
        itemsGrid.innerHTML = '';

        if (items.length === 0) {
            itemsGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No items reported yet</h3>
                    <p>Be the first to report a lost or found item.</p>
                </div>
            `;
            return;
        }

        // Create cards for each item
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';

            // Determine image placeholder if none uploaded
            const imageHtml = item.imageUrl 
                ? `<img src="${item.imageUrl}" alt="${item.title}" class="card-img">`
                : `<div class="card-img"><span>No Image Provided</span></div>`;

            const badgeClass = item.type === 'lost' ? 'badge-lost' : 'badge-found';
            
            card.innerHTML = `
                ${imageHtml}
                <div class="card-content">
                    <span class="card-badge ${badgeClass}">${item.type}</span>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                    <div class="card-contact">
                        Contact: ${item.contact}
                    </div>
                </div>
            `;

            itemsGrid.appendChild(card);
        });
    }

    // Initial render
    renderItems();
});