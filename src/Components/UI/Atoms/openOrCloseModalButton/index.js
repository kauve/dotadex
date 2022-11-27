const OpenOrCloseModalButton = ({ text, className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default OpenOrCloseModalButton;
