// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const messageItems = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme Customization
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span'); // Fixed: Use querySelectorAll

var root = document.querySelector(':root');
const colorpalette =document.querySelectorAll('.choose-color span');
const themeModalContent=document.querySelector('.card');

const bg1=document.querySelector('.bg-1');
const bg2=document.querySelector('.bg-2');
const bg3=document.querySelector('.bg-3');

// === Sidebar ===
// Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // Toggle notification popup visibility
        if (item.id !== 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

// === Messages ===
// Filter chat messages based on search input
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    messageItems.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        chat.style.display = name.includes(val) ? 'flex' : 'none';
    });
};

// Event listener for search input
messageSearch.addEventListener('keyup', searchMessage);

// Highlight messages when notifications are clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// === Theme Customization ===

// Open theme customization modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Close theme customization modal when clicking on empty space inside the modal
const closeThemeModal = (e) => {
    // Close modal if the click is either on the backdrop or on the empty space inside the modal content
    if (e.target.classList.contains('customize-theme') || e.target === themeModalContent) {
        themeModal.style.display = 'none';
    }
}

// Event listeners for theme modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//remove active class from spans
const removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}
//----FONT-----
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-right', '5.4rem');
            root.style.setProperty('--sticky-top-left', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-right', '5.4rem');
            root.style.setProperty('--sticky-top-left', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-right', '-2rem');
            root.style.setProperty('--sticky-top-left', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-right', '5rem');
            root.style.setProperty('--sticky-top-left', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-right', '-12rem');
            root.style.setProperty('--sticky-top-left', '-35rem');
        }

        // Apply the font size to the HTML element
        document.querySelector('html').style.fontSize = fontSize;
    });
}); 
//remove active
const removeColorSelector = () => {
    colorpalette.forEach(colorpick =>{
        colorpick.classList.remove('active');
    })
}
//change primary colors
colorpalette.forEach(color =>{
    color.addEventListener('click',() =>{
   let primaryHue;
   removeColorSelector();
  if(color.classList.contains('color-1')){
    primaryHue=252;
    
  }
  else if(color.classList.contains('color-2')) {
     primaryHue=52;
  }
  else if(color.classList.contains('color-3')) {
    primaryHue=352;
 }
 else if(color.classList.contains('color-4')) {
    primaryHue=152;
 }
 else if(color.classList.contains('color-4')) {
    primaryHue=202;
 }
 color.classList.add('active');
 root.style.setProperty('--color-hue',primaryHue);
 
    })
})


//theme background values 
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;
//because all of them are changing lightness in hsl

const changebg =() =>{
root.style.setProperty('--light-color-lightness',lightcolorlightness);
root.style.setProperty('--dark-color-lightness',darkcolorlightness);
root.style.setProperty('--white-color-lightness',whitecolorlightness);


}

bg1.addEventListener('click',()=>{
    

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click',()=>{
    darkcolorlightness='95%';
    whitecolorlightness='20%';
    lightcolorlightness='15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changebg();
})

bg3.addEventListener('click',()=>{
    darkcolorlightness='95%';
    whitecolorlightness='10%';
    lightcolorlightness='0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changebg();
})




