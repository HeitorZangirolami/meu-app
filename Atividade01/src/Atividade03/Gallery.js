import './Gallery.css';
import Avatar from './Avatar';
import imgHomem from './images/homem.png';


const Card = ({ children }) => (
  <div className='Card'>
    {children}
  </div>
);

const Profile = () => (
  <Card>
    <Avatar 
      size={100}
      person={{
        name: 'SATORU GOJO', 
        image: imgHomem
      }}
    />
  </Card>
);

const Gallery = () => (
  <div>
    <h1>Alguns Homens</h1>
    {[1, 2, 3].map((index) => (
      <Profile key={index} />
    ))}
  </div>
);

export default Gallery;

