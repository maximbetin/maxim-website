import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const theme = {
  defaultTheme: "light",
  themes: {
    light: {
      dark: false,
      colors: {
        primary: "#2C3E91",
        secondary: "#11A39E",
        accent: "#FFB15E",
        surface: "#FFFFFF",
        background: "#F4F7FF",
        error: "#B71C1C",
        info: "#1E88E5",
        success: "#2E7D32",
        warning: "#FFB300",
      },
    },
  },
};

export default createVuetify({
  components,
  directives,
  theme,
});
