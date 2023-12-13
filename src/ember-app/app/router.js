import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itog10-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-itog10-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-itog10-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-itog10-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-itog10-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-itog10-длительность-l');
  this.route('i-i-s-itog10-длительность-e',
  { path: 'i-i-s-itog10-длительность-e/:id' });
  this.route('i-i-s-itog10-длительность-e.new',
  { path: 'i-i-s-itog10-длительность-e/new' });
  this.route('i-i-s-itog10-договор-l');
  this.route('i-i-s-itog10-договор-e',
  { path: 'i-i-s-itog10-договор-e/:id' });
  this.route('i-i-s-itog10-договор-e.new',
  { path: 'i-i-s-itog10-договор-e/new' });
  this.route('i-i-s-itog10-затр-время-l');
  this.route('i-i-s-itog10-затр-время-e',
  { path: 'i-i-s-itog10-затр-время-e/:id' });
  this.route('i-i-s-itog10-затр-время-e.new',
  { path: 'i-i-s-itog10-затр-время-e/new' });
  this.route('i-i-s-itog10-клиент-l');
  this.route('i-i-s-itog10-клиент-e',
  { path: 'i-i-s-itog10-клиент-e/:id' });
  this.route('i-i-s-itog10-клиент-e.new',
  { path: 'i-i-s-itog10-клиент-e/new' });
  this.route('i-i-s-itog10-расчет-ост-врем-l');
  this.route('i-i-s-itog10-расчет-ост-врем-e',
  { path: 'i-i-s-itog10-расчет-ост-врем-e/:id' });
  this.route('i-i-s-itog10-расчет-ост-врем-e.new',
  { path: 'i-i-s-itog10-расчет-ост-врем-e/new' });
  this.route('i-i-s-itog10-услуги-l');
  this.route('i-i-s-itog10-услуги-e',
  { path: 'i-i-s-itog10-услуги-e/:id' });
  this.route('i-i-s-itog10-услуги-e.new',
  { path: 'i-i-s-itog10-услуги-e/new' });
});

export default Router;
