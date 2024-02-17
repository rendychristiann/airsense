const DashboardHeader = ({ indexData }) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-xl mx-auto text-center -mt-20 mb-10 px-10">
          <h2 className="moving font-semibold text-3xl mb-4 lg:text-4xl">
            Dashboard
          </h2>
          <h2 className="moving font-medium text-xl">
            Latest air pollutant index at{" "}
            <span className="font-bold">
              {" "}
              <FormatDate indexData={indexData} />
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

const FormatDate = ({ indexData }) => {
  const latestIndex = indexData.slice(-1)[0];
  const dateObject = new Date(latestIndex.dateValue);
  const formattedDate = dateObject.toISOString().split("T")[0];

  const newDate = new Date(formattedDate)
  const options = { day: "numeric", month: "long", year: "numeric" };
  const dateSentence = newDate.toLocaleDateString("en-US", options);
  return dateSentence;
};
