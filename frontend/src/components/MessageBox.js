import Alert from 'react-bootstrap/Alert';

export default function MessageBox({ variant, children }) {
  // get variant from HomeScreen or Product Screen
  return <Alert variant={variant || 'info'}>{children}</Alert>;
}
