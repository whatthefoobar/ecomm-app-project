import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams(); // to get description from url (slug)
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
