import React from 'react';
import './BodyNList.css';

const BodyNList = ({ data }) => {
  return (
    <section className="conteudo">
      <div className="content">
        <div className="content-container">
          <ul id="list">
            {data && (
              <>
                <li>
                  {data.common_locations && (
                    <>
                      Lugar comuns para se encontrar: {data.common_locations}{' '}
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BodyNList;
