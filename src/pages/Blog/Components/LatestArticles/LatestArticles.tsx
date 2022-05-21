import { Grid } from '@mui/material';
import SmallArticle from 'src/pages/Blog/Components/LatestArticles/Components/SmallArticle/SmallArticle';

const LatestArticles = () => {
  return (
    <Grid container>
      <Grid container justifyContent="flex-start" alignItems="center">
        <SmallArticle
          title="Binary Exploitation [pwnable.kr] - (Level 3) Challenge Description"
          date="Sep 25, 2022"
          src="https://www.taintedbits.com/2020/05/16/binary-exploitation-pwnable-kr-level-3/func-disassembly.png"
          views={1200}
        />
        <SmallArticle
          title="Tw33tchainz binary exploitation writeup"
          date="Sep 25, 2022"
          src="https://dimit.me/blog/images/tw33tchainz/intro.png"
          views={1200}
        />
        <SmallArticle
          title="Binary Exploitation Deep Dive: Return to LIBC (with Matt)"
          date="Sep 25, 2022"
          src="https://technicalnavigator.in/wp-content/uploads/2022/02/Screenshot_20220213_131647.png"
          views={1200}
        />
      </Grid>
    </Grid>
  );
};

export default LatestArticles;
