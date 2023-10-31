import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import astrubMap from '../assets/Astrub Map.png';
import astrubChâtaigner from '../assets/Astrub châtaigner.png';
import astrubPommier from '../assets/Astrub pommier.png';
import astrubNoisetier from '../assets/Astrub noisetier.png';
import astrubFrêne from '../assets/Astrub frêne.png';
import '../styles/astrub.css';

function MainPage() {
    const [selectedTrees, setSelectedTrees] = useState(['châtaigner', 'pommier', 'noisetier', 'frêne']); // Utilisez un tableau pour suivre les arbres sélectionnés

    function addTree(e) {
        const tree = e.target.textContent;
        if (selectedTrees.includes(tree)) {
            // Si l'arbre est déjà sélectionné, le désélectionner
            setSelectedTrees(selectedTrees.filter(selectedTree => selectedTree !== tree));
        } else {
            // Sinon, le sélectionner en ajoutant à la liste
            setSelectedTrees([...selectedTrees, tree]);
        }
    }

    return (
        <div id='main-page'>
            <div id='astrub-page'>
                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                    <TransformComponent>
                        <img className='astrub' id='astrub-map' src={astrubMap} alt="" />
                        <img className={`astrub other-astrub ${selectedTrees.includes('châtaigner') ? 'selected' : ''}`} id='astrub-châtaigner' src={astrubChâtaigner} alt="" />
                        <img className={`astrub other-astrub ${selectedTrees.includes('pommier') ? 'selected' : ''}`} id='astrub-pommier' src={astrubPommier} alt="" />
                        <img className={`astrub other-astrub ${selectedTrees.includes('noisetier') ? 'selected' : ''}`} id='astrub-noisetier' src={astrubNoisetier} alt="" />
                        <img className={`astrub other-astrub ${selectedTrees.includes('frêne') ? 'selected' : ''}`} id='astrub-frêne' src={astrubFrêne} alt="" />
                    </TransformComponent>
                </TransformWrapper>
                <nav className='filter-nav' id='astrub-filter-nav'>
                    <ul className='filter-nav-ul' id='astrub-filter-ul'>
                        <li className={selectedTrees.includes('châtaigner') ? 'selected' : ''} onClick={addTree}>châtaigner</li>
                        <li className={selectedTrees.includes('pommier') ? 'selected' : ''} onClick={addTree}>pommier</li>
                        <li className={selectedTrees.includes('noisetier') ? 'selected' : ''} onClick={addTree}>noisetier</li>
                        <li className={selectedTrees.includes('frêne') ? 'selected' : ''} onClick={addTree}>frêne</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MainPage;