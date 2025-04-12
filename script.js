
function zoom(img) {
    const preview = document.getElementById('preview');
    const previewImg = document.getElementById('preview-img');
    previewImg.src = img.src;
    preview.style.display = 'flex';
}
