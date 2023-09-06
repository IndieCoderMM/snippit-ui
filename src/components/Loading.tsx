import Style from '@/styles/Loading.module.css';

const Loading = ({ title, message }: { title: string; message: string }) => {
  return (
    <div className="grid place-items-center text-center">
      <h2 className="text-3xl font-semibold capitalize text-gray-500">
        {title}
      </h2>
      <p className="text-xl font-medium text-gray-400">{message}</p>
      <div className={Style.container}>
        <div className={Style.spinner}>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
