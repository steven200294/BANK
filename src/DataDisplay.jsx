function DataDisplay({ description, prix, categorie }) {
    return (
      <div>
        <h2>depense</h2>
        <p>Description : {description}</p>
        <p>Price : {prix}</p>
        <p>Catégorie : {categorie}</p>
      </div>
    );
  }
  
  export default DataDisplay;