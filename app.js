document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) { // Basic check
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.post-container').style.display = 'block';
        document.getElementById('user').innerText = username;
    } else {
        alert('Please enter both username and password!');
    }
});

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    var postTitle = document.getElementById('postTitle').value;
    var postContent = document.getElementById('postContent').value;
    var postImage = document.getElementById('postImage').files[0];

    if (postTitle && postContent && postImage) {
        // Create elements to display the post
        var postDisplay = document.createElement('div');
        postDisplay.classList.add('single-post');

        var displayTitle = document.createElement('h3');
        displayTitle.innerText = postTitle;

        var displayContent = document.createElement('p');
        displayContent.innerText = postContent;

        var displayImage = document.createElement('img');
        displayImage.src = URL.createObjectURL(postImage);
        displayImage.style.maxWidth = '100%';

        // Append elements to the post display area
        postDisplay.appendChild(displayImage);
        postDisplay.appendChild(displayTitle);
        postDisplay.appendChild(displayContent);

        document.getElementById('postDisplay').appendChild(postDisplay);
        document.getElementById('postDisplay').style.display = 'block';

        // Clear the input fields after submission
        document.getElementById('postForm').reset();
    } else {
        alert('Please fill out all fields!');
    }
});