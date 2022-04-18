import { Box, Link, Typography } from "@mui/material";

export default function MainPage() {

  return (
    <Box sx={{ paddingX: { xs: 2, md: 1 }}}>
      <Typography paragraph>Ты в "узелке" различных pet-проектов.</Typography>
      <Typography paragraph>
        "Каких еще pet-проектов?" - спросишь ты. А мы пока сами не знаем 🙂. <br />
        Заходи на <Link href="https://t.me/znoderu" target="_blank">канал</Link>, там все узнаешь самый первый.
      </Typography>
    </Box>
  );
}
