import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid/main-grid';
import Box from '../src/components/MainGrid/box';
/* Importando componentes individualmente */
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/profileRalations'

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'rafael-c-s';

  const favoritePeople = ['rafael-c-s', 'sabarus', 'octocat'];

  return (
    <div>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea"}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <Box>
            <h1 className="title">Bem-vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="smallTitle">Ações</h2>
          </Box>
        </div>
        <div className="relationsArea" style={{ gridArea: "relationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da Comunidade ({favoritePeople.length})</h2>
            
            <ul>
              {favoritePeople.map((item)=>{
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </div>
  )
}
