const TypingIndicator = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
