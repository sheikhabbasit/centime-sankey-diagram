export const useChartModel = () => {
  const getChartData = async () => {
    try {
      let data;
      await new Promise((resolve) => {
        setTimeout(() => {
          data = [
            { id: "1", incoming: "Salary", outgoing: "Bills", amount: 3000 },
            { id: "2", incoming: "Salary", outgoing: "Savings", amount: 2000 },
            {
              id: "3",
              incoming: "Bills",
              outgoing: "Electric Bill",
              amount: 1000,
            },
            {
              id: "4",
              incoming: "Bills",
              outgoing: "Mobile Bill",
              amount: 2000,
            },
          ];
          resolve();
        }, 1000);
      });
      return data;
    } catch (error) {
      console.error("Error fetching chart data:", error);
      return [];
    }
  };

  return { getChartData };
};
