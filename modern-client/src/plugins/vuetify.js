import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const theme = {
  defaultTheme: "light",
  themes: {
    light: {
      dark: false,
      colors: {
        primary: "#1A237E",
        secondary: "#00BFA5",
        accent: "#FF6F00",
        surface: "#FFFFFF",
        background: "#F5F7FA",
        error: "#D32F2F",
        info: "#0288D1",
        success: "#388E3C",
        warning: "#FBC02D",
      },
    },
  },
};

export default createVuetify({
  components,
  directives,
  theme,
});
