export default function Card({ children, className = '', hover = false }) {
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
