<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Popup Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
<!-- loginbut.php -->
<!-- Trigger Button -->
<div class="d-flex justify-content-end p-3">
  <button class="btn btn-outline-primary" id="loginBtn" type="button">Login</button>
</div>

<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" id="shakeModal">
      <div class="modal-header">
        <h5 class="modal-title">Login to check out</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Please log in to continue.</p>
      </div>
    </div>
  </div>
</div>


<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById('loginBtn');
    const loginModalEl = document.getElementById('loginModal');
    const shakeModal = document.getElementById('shakeModal');

    // Initialize the modal
    const loginModal = new bootstrap.Modal(loginModalEl);

    // Function to show and shake the modal
    function showAndShakeModal() {
      loginModal.show();
    }

    // Only shake *after* modal is shown
    loginModalEl.addEventListener('shown.bs.modal', () => {
      shakeModal.classList.remove('shake');
      void shakeModal.offsetWidth; // reflow
      shakeModal.classList.add('shake');
    });

    // Manual open on button click
    if (loginBtn) {
      loginBtn.addEventListener('click', showAndShakeModal);
    }

    // Auto-open every 10 seconds
    setInterval(() => {
      if (!document.body.classList.contains('modal-open')) {
        showAndShakeModal();
      }
    }, 10000);
  });
</script>


</body>
</html>
