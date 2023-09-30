
import { cn } from '../../../../utils/cn';
import { REACT_EDIT_PATH, REACT_PREVIEW_PATH } from '../config';

export default function CodeBlockReact({
  hash, className = '', children = null,
}) {
  const previewPath = `${REACT_PREVIEW_PATH}#${hash}`
  const editPath = `${REACT_EDIT_PATH}#${hash}`

  const width = 600
  const height = 600
  return <div className={cn('', className)}>
    <iframe
      style={{ width, height }}
      // src={editPath}></iframe>
      src={previewPath}></iframe>
  </div>;
}
