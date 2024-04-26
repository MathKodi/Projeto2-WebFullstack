import React from 'react'

const LiGenerating = ({data}) => {
  return (
    <>
        {data && (
              <>
                <li>
                  {data.common_locations && (
                    <>
                      Lugar comuns para se encontrar: {data.common_locations}{" "}
                      <br />
                    </>
                  )}
                  {data.description && (
                    <>
                      Descrição: {data.description} <br />
                    </>
                  )}
                  {data.drops && (
                    <>
                      Drops: {data.drops} <br />
                    </>
                  )}
                  {data.name && (
                    <>
                      Nome: {data.name} <br />
                    </>
                  )}
                </li>
                {data.image && <img src={data.image} alt="Imagem do item" />}
              </>
            )}
    </>
  )
}

export default LiGenerating