const arrLikedIds = [];
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const eleContainer = document.querySelector('.posts-list');



for (let i = 0; i < posts.length; i++) {
    renderPost(posts[i])
    //miPiace(posts[i])

}

function renderPost(objPost) {
    const elePost = document.createElement('div');
    elePost.classList.add('post');
    elePost.dataset.postid = objPost.id;
    elePost.innerHTML = ` <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src=${objPost.author.image} alt="${objPost.author.name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${objPost.author.name}</div>
            <div class="post-meta__time">${objPost.created.split('-').reverse().join('/')}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${objPost.content}</div>
<div class="post__image">
    <img src=${objPost.media} alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta" >
            <a  class="like-button  js-like-button" href="#!" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b  class="js-likes-counter">${objPost.likes}</b> persone
        </div>
    </div> 
</div>        `
    elePost.querySelector('.js-like-button').addEventListener('click', toogleLike);

    eleContainer.append(elePost);
      
};




function toogleLike() {
    const btnLike = this;
    const elePost = btnLike.closest('.post');
    const postId = parseInt(elePost.dataset.postid);
    const eleCounter = elePost.querySelector('.js-likes-counter');
    let indexLikedPost = 0;
    const objPost = posts[indexLikedPost];

    while (postId != posts[indexLikedPost].id) {
        indexLikedPost++;
    };



    if (btnLike.classList.contains('like-button--liked')) {
        removeLike(btnLike, objPost);
    } else {
        addLike(btnLike, objPost);
    };
    eleCounter.innerHTML = objPost.likes;
};

function removeLike(btnLike, objPost) {
    const index = arrLikedIds.indexOf(objPost.id)
    objPost.likes--;
    btnLike.classList.remove('like-button--liked');
    arrLikedIds.splice(index,1);
    console.log(arrLikedIds);
    console.table(posts);
};

function addLike(btnLike, objPost) {
    btnLike.classList.add('like-button--liked');
    objPost.likes++;
    arrLikedIds.push(objPost.id);
    console.log(arrLikedIds);
    console.table(posts);
};







