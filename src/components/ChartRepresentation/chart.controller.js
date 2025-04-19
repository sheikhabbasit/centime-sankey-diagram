import { useEffect } from "react";
import { useChartModel } from "./chart.model";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addInitialData, setLoading } from "../../store/slices/chartDataSlice";

export const useChartController = () => {
  const dispatch = useDispatch();
  const { dataStreams, loading } = useSelector((state) => state.data);
  const { t } = useTranslation();
  const { getChartData } = useChartModel();

  const handleDataFetch = async () => {
    dispatch(setLoading(true));
    const res = await getChartData();
    if (res.length > 0) {
      dispatch(addInitialData(res));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    handleDataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { loading, t, dataStreams };
};
