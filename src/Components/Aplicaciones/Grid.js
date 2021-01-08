export default function Grid({ items, nombre }) {
  return (
    <div className="apps-grid">
      {items.map((item, i) => (
        <div key={i} className="app-grid">
          <div className="imagen-app">
            <img src={item.imagen} alt={item.nombre} />
          </div>
          <div className="app-info">
            <h3>{nombre}</h3>
            <div className="datos">
              <span>
                <i className="fas fa-comment coment"></i>
                <small>{item.coments}</small>
              </span>
              <span>
                <i className="fas fa-heart heart"></i>
                <small>{item.hearts}</small>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
