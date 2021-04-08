const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
  };
  
document.getElementById('logout').addEventListener('click', logout);


document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});