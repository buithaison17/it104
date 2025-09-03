interface PropsType {
  read: number;
  totalArticle: number;
}

export const ProgressBar: React.FC<PropsType> = ({ read, totalArticle }) => {
  const percentage: number = totalArticle > 0 ? (read / totalArticle) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      <div className="progress-label">
        Đã đọc {read}/{totalArticle} bài viết ({Math.round(percentage)}%)
      </div>
    </div>
  );
};
