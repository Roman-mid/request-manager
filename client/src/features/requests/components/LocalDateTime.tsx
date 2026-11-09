interface LocalDateProps {
  date: string;
  className?: string;
}

const LocalDateTime = ({ date, className }: LocalDateProps) => {
  return (
    <span className={className}>{new Date(date).toLocaleDateString()}</span>
  );
};

export default LocalDateTime;
