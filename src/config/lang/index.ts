import localization from 'react3l-localization';
import {Tab} from 'src/config/lang/Tab';

export function translate(key: string): string {
  return key;
}

export const Lang = {
  Action: {
    Save: localization.translate('general.action.save'),
    OK: localization.translate('general.action.ok'),
    Cancel: localization.translate('general.action.cancel'),
    Delete: localization.translate('general.action.delete'),
    Edit: localization.translate('general.action.edit'),
    Search: localization.translate('general.action.search'),
    Done: localization.translate('general.action.done'),
    Select: localization.translate('general.action.select'),
    SelectDate: localization.translate('general.action.selectDate'),
    Filter: localization.translate('general.action.filter'),
    Type: localization.translate('general.action.type'),
    Note: localization.translate('general.action.note'),
    Add: localization.translate('general.action.add'),
    Comment: localization.translate('general.action.comment'),
    Approve: localization.translate('general.action.approve'),
    Refuse: localization.translate('general.action.refuse'),
    View: localization.translate('general.action.view'),
    Next: localization.translate('general.action.next'),
    Create: localization.translate('general.action.create'),
  },
  Tab,
};
