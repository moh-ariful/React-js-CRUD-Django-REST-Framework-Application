useEffect(() => {
    fetch("http://localhost:7000/employee", {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 12dflwcctdfhsjyttvvgdtern'
        }
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
