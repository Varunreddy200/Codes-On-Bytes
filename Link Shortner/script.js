document.addEventListener('DOMContentLoaded', function() {
    const longUrlInput = document.getElementById('longUrl');
    const shortenButton = document.getElementById('shortenButton');
    const shortenedUrlContainer = document.getElementById('shortenedUrlContainer');
    const shortenedUrl = document.getElementById('shortenedUrl');

    shortenButton.addEventListener('click', function() {
        const longUrl = longUrlInput.value;
        const shortened = 'https://example.com/shortened-url';

        shortenedUrl.textContent = shortened;
        shortenedUrl.href = shortened;
        shortenedUrlContainer.style.display = 'block';
    });
});
