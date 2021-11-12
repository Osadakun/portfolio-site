import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
});

const Informations: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Box p={5}>
        <Box display='flex' justifyContent='center' p={1} fontSize='30px'>
            Informations
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>
                About
              </Typography>
              <Typography color='textSecondary'>
                学部3年 / バドミントンコーチ / 石川県
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>
                Hobby
              </Typography>
              <Typography color='textSecondary'>
                スニーカー収集 / バドミントン / ドライブ
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>
                Skills
              </Typography>
              <Typography color='textSecondary'>
                Python / React / Ruby / TypeScript / Docker / C* / Java* / JavaScript* / Go* / MySQL / PostgreSQL / CSS*** (*は授業程度) (***はワカラン)
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>
                Job
              </Typography>
              <Typography color='textSecondary'>
                明光義塾(小中高校生：数英担当) / セカンドストリート(バイトリーダー)←過去
              </Typography>
              <Typography color='textSecondary'>
                株式会社BearTail (業務委託契約)←現在
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>
                Interest
              </Typography>
              <Typography color='textSecondary'>
                Heroku / LineBot / Arduino / RaspberryPI / AOJ / 自動化・可視化 / 組み込み
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='h6'>
                Qualifications
              </Typography>
              <Typography color='textSecondary'>
                基本情報技術者(FE) / TOEIC(勉強中)
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default Informations;