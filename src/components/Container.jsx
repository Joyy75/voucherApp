export const Container = ({ children, className  }) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] mx-auto ${className}`}>
      {children}
    </div>
  );
}