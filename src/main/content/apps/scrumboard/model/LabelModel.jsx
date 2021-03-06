import { FuseUtils } from '@fuse/index';

class LabelModel {
  /**
     * Constructor
     */
  constructor(data) {
    const label = data || {};

    this.id = label.id || FuseUtils.generateGUID();
    this.name = label.name || '';
    this.class = label.class || 'bg-blue text-white';
  }
}

export default LabelModel;
