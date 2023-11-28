import './PackingList.css';


const Item = ({ name, isPacked }) => (
  <li className={`Item ${isPacked ? 'packed' : ''}`}>
    {isPacked ? `${name} ✓` : name}
  </li>
);

const PackingList = () => (
  <div>
    <h1>Packing List</h1>
    <ul>
      <Item isPacked={true} name="Banana" />
      <Item isPacked={false} name="Maça" />
    </ul>
  </div>
);

export default PackingList;

