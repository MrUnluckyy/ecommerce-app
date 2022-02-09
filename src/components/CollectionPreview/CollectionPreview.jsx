import "./collection-preview.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItems }) => {
            return <CollectionItem key={id} {...otherItems} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
