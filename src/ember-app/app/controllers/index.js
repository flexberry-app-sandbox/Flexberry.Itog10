import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.прочее.caption'),
          title: i18n.t('forms.application.sitemap.прочее.title'),
          children: [{
            link: 'i-i-s-itog10-длительность-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-itog10-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-itog10-длительность-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-itog10-затр-время-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-itog10-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-itog10-затр-время-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-itog10-услуги-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-itog10-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-itog10-услуги-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-itog10-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-itog10-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-itog10-дир-отд-по-раб-с-кл-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-itog10-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-itog10-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-itog10-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-itog10-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-itog10-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-itog10-расчет-ост-врем-l.title'),
            children: null
          }, {
            link: 'i-i-s-itog10-договор-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-itog10-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-itog10-договор-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})