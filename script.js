//modals
const profile_modal = document.getElementById('profile-modal');
const follow_modal = document.getElementById('follow-modal');

//buttons to open modal
const share_btn = document.getElementById('share-btn');
const follow_btn = document.getElementById('follow-btn');

//buttons to close modal
const profile_modal_close = document.getElementById('profile-modal-close');
const follow_modal_close = document.getElementById('follow-modal-close');

//overlay
const overlay =document.getElementById('overlay');


//open modal function
const openModal = (event) => {
    const eleId = event.target.id;

    if(eleId == 'share-btn'){
        console.log('Profile Modal Opened');
        profile_modal.classList.add('active');
        overlay.classList.add('overlayactive');
    }

    else if(eleId == 'follow-btn'){
        console.log('Follow Modal Opened');
        follow_modal.classList.add('active');
        overlay.classList.add('overlayactive');
    }
}  

//close Modal Function
const closeModal = (event) => {
    const eleId = event.target.id;

    if(eleId == 'profile-modal-close'){
        console.log('Profile Modal Closed');
        profile_modal.classList.remove('active');
        overlay.classList.remove('overlayactive');
    }

    else if(eleId == 'follow-modal-close'){
        console.log('Follow Modal Closed');
        follow_modal.classList.remove('active');
        overlay.classList.remove('overlayactive');
    }

    else if(eleId == 'overlay'){
        console.log('Modal Closed');
        profile_modal.classList.remove('active');
        follow_modal.classList.remove('active');
        overlay.classList.remove('overlayactive');
    }

};


//Event listener on buttons to open the modal
share_btn.addEventListener('click', openModal);
follow_btn.addEventListener('click', openModal);

//Event listener on buttons to close the modal
profile_modal_close.addEventListener('click', closeModal);
follow_modal_close.addEventListener('click', closeModal);

//modal will be closed when clicked on overlay
overlay.addEventListener('click', closeModal);


