import m from 'mithril';
import {materialize} from './mdls';


const configureVideo = (el, initialized, context) => {
  context.retain = true;
  navigator.webkitGetUserMedia({video: true}, stream => {
    el.src = window.URL.createObjectURL(stream);
  }, err => {console.log(err);});
};

const controller = () => ({
  name: m.prop(''),
  nameJpn: m.prop(''),
  vintage: m.prop('1980')
});

const view = ctrl =>
  m('.NewWineEtiquette', [
    m('video[width="640"][height="480"][autoplay]', {config: configureVideo}),
    m('.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label', {config: materialize}, [
      m('input.mdl-textfield__input[type="text"][id="name"]', {
        value: ctrl.name(),
        oninput: m.withAttr('value', ctrl.name)
      }),
      m('label.mdl-textfield__label[for="name"]', 'ワイン名')
    ]),
    m('.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label', {config: materialize}, [
      m('input.mdl-textfield__input[type="text"][id="nameJpn"]'),
      m('label.mdl-textfield__label[for="nameJpn"]', 'ワイン名（日本語）')
    ]),
    m('.mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label', {config: materialize}, [
      m('input.mdl-textfield__input[type="number"][id="vintage"]'),
      m('label.mdl-textfield__label[for="vintage"]', 'ヴィンテージ')
    ])
  ]);

module.exports = {controller, view};

