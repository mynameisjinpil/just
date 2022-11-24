/* eslint no-use-before-define: 0 */
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    /* eslint no-use-before-define: 0 */
    import('web-vitals').then((props) => {
      props.getCLS(onPerfEntry);
      props.getFID(onPerfEntry);
      props.getFCP(onPerfEntry);
      props.getLCP(onPerfEntry);
      props.getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
