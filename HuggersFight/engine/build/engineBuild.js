'use strict';

const debug = 0;
const showWatermark = 0;
const godMode = 0;
const debugOverlay = 0;
const debugPhysics = 0;
const debugParticles = 0;

// allow debug commands to be removed from the final build
const ASSERT      = ()=> {}
const debugPoint  = ()=> {}
const debugRect   = ()=> {}
const debugLine   = ()=> {}
const debugInit   = ()=> {}
const debugUpdate = ()=> {}
const debugRender = ()=> {}