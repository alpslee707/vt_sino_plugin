export default function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/vt_sino_plugin/vt_sino_plugin'
      ]
    }
  });
}
