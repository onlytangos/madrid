var data=[
'act;class;Adrian Lupi y Anita Escobar;#LC14;2024-05-24;19:45;2024-05-24;21:00;0;Loic Vix;#HALA',
'act;class;Alejandra Martiñan & Rafael Luna (1/2);#LC14;2024-04-20;19:45;2024-04-20;21:00;0;Andea Venturini;#HAMR',
'act;class;Alejandra Martiñan & Rafael Luna (2/2);#LL19;2024-04-21;18:30;2024-04-21;20:00;0;Andea Venturini;#HAMR',
'act;class;Daniel Andrizzi;#LM11;2024-04-02;20:00;2024-04-02;21:00;7;Daniel Andrizzi;#HDAA',
'act;class;Joaquin Martinez;#LJ08;2024-04-01;20:00;2024-04-01;21:00;7;Joaquin Martinez;#HJOM',
'act;class;Monina Paz;#LL19;2024-04-11;20:00;2024-04-11;21:30;0;Monina Paz;',
'act;livemusic;La tanda de Giselle y Anibal;#LM28;2024-04-03;22:30;2024-04-03;22:45;7;Gisele y Anibal;#HCOM',
'act;livemusic;La tanda del Cuartero de Cuerdas;#LM28;2024-04-10;22:45;2024-04-10;23:00;0;Gisele y Anibal;',
'act;livemusic;No me vengan con milongas;#LCS1;2024-04-12;21:30;2024-04-12;23:00;0;Jimena González;',
'act;livemusic;Tanda Al Sur duo;#LJ08;2024-04-08;22:30;2024-04-08;22:45;0;Maurice Gambra;',
'act;class;Jorge Ramirez;#LC14;2024-04-11;19:00;2024-04-11;20:00;7;Jorge;#HEAG',
'act;milonga;El Aguante - DJ Jorge Ramirez;#LC14;2024-04-11;20:00;2024-04-11;23:00;7;Jorge;#HEAG',
'act;milonga;El Bulín;#LJ08;2024-04-01;21:00;2024-04-01;00:30;7;Maurice Gambra;#HECA',
'act;class;Edagardo;#LJ08;2024-04-10;19:00;2024-04-10;20:00;7;Maurice Gambra;#HECA',
'act;milonga;El Cachafaz - DJ Maurice;#LJ08;2024-04-10;20:00;2024-04-10;23:00;7;Maurice Gambra;#HECA',
'act;milonga;El Conventiyo - DJ Pablo;#LR22;2024-04-05;22:00;2024-04-05;02:00;7;Pablo y Beatriz;#HCON',
'act;milonga;El Gancho - DJ Maurice;#LJ08;2024-04-07;19:30;2024-04-07;23:30;7;Maurice Gambra;#HECA',
'act;milonga;El Puntazo - DJ Andrea;#LC14;2024-04-06;21:00;2024-04-07;00:30;7;Andea Venturini;#HMLP',
'act;milonga;Junta Brava - DJ Fernando Nahmijas;#LJ08;2024-04-16;21:30;2024-04-17;00:30;28;Victoria;#HMJB',
'act;milonga;La Coqueta de Madrid - DJ Gisele;#LM28;2024-04-03;21:00;2024-04-03;00:00;7;Gisele y Anibal;#HCOM',
'act;milonga;La Melange - DJ Loic;#LC14;2024-04-05;21:00;2024-04-06;00:30;7;Loic;#HMLM',
'act;show;Christian Cerezo & Valentin Arias Delgado;#LC14;2024-04-26;23:15;2024-04-26;23:30;0;Loic;#HCCC',
'act;class;Christian Cerezo & Valentin Arias Delgado;#LC14;2024-04-26;19:45;2024-04-26;21:00;0;Loic;#HCCC',
'act;milonga;La Suerte Loca - DJ Luis Abellan;#LSP1;2024-04-04;22:00;2024-04-03;01:00;7;Luis Abellan;#HMSL',
'act;milonga;La Tangoteca De Golden - DJ Daniel;#LM11;2024-04-02;21:00;2024-04-02;00:00;7;Daniel Andrizzi;#HDAA',
'act;class;Juanma y Natalia;#LJ08;2024-04-20;19:00;2024-04-20;20:00;0;Maurice Gambra;#HMTG',
'act;milonga;Tangoneón - DJ Lorenzo;#LJ08;2024-04-20;20:00;2024-04-20;23:00;0;Maurice Gambra;#HMTG',
'act;outdoors;El Templete del Retiro - DJ Julio;#LPDR;2024-04-07;17:00;2024-04-07;21:00;7;Julio Tijero;#HMTR',
'act;practice;Amarras - DJ Luis Abellan;#LFR7;2024-04-07;19:30;2024-04-07;23:30;7;Ricardo Quesada;#HAMA',
'act;practice;Sin Gomina - Melina Sol;#LC14;2024-04-07;18:00;2024-04-07;21:00;0;Loic Vix;',
'act;show;Adrian Lupi y Anita Escobar;#LC14;2024-05-24;23:00;2024-05-24;23:15;0;Loic Vix;#HALU',
'act;show;Alejandra Martiñan & Rafael Luna;#LC14;2024-04-20;23:15;2024-04-20;23:30;0;Andea Venturini;#HAMR',
'act;show;Alex Moncada & Martina Waldman;#LC14;2024-04-06;23:10;2024-04-06;23:30;0;Andea Victoria;#HAMR',
'act;show;Bárbara Carpino & Claudio Forte;#LC14;2024-04-05;23:10;2024-04-05;23:30;0;Loic Vix;',
'act;show;Cristian Cerezo & Valentín Arias;#LC14;2024-04-26;21:00;2024-04-26;00:30;0;Loic Vix;#HCCV',
'act;show;Luces de Tango;#LTEF;2024-04-21;12:30;2024-04-21;14:00;0;Claudia;#HLDT',
//'act;milonga;Che Bandoneón - DJ Maurice;#LJ08;2024-04-06;20:30;2024-04-06;23:30;7;Maurice Gambra;#HECA',
'href;#HLDT;luces.jpg',
'href;#HMTG;tangoneon.jpg',
'href;#HALA;',
'href;#HCCC;cerezo.jpg',
'href;#HAMA;amarras.jpg',
'href;#HAMR;ale.jpg',
'href;#HCOM;coqueta.jpg',
'href;#HCON;conventiyo.jpg',
'href;#HDAA;golden.jpg',
'href;#HEAG;aguante.jpg',
'href;#HECA;madridtangoclub.jpg',
'href;#HJOM;jma.png',
'href;#HLDT;luces.jpg',
'href;#HMJB;juntabrava.jpg',
'href;#HMLP;puntazo.jpg',
'href;#HMSL;suerteloca.jpg',
'href;#HMTR;templete.jpg',
'href;#HMLM;lm.jpg',
'loc;#LC14;Carretas 14;spain;madrid;;',
'loc;#LCS1;Pza. Ciudad de Salta 1;spain;madrid;;',
'loc;#LFR7;Fco. de Ricci 7;spain;madrid;;',
'loc;#LJ08;Jacometrezo 8;spain;madrid;calle de Jacometrezo 8;40.4204911,-3.7079492',
'loc;#LL19;Luna 19 1A;spain;madrid;;',
'loc;#LM11;Pl. de los Mostenses 11;spain;madrid;;',
'loc;#LM28;Melendez Valdes 28;spain;madrid;;',
'loc;#LPDR;Parque del Retiro;spain;madrid;;',
'loc;#LR22;Roble 22;spain;madrid;;',
'loc;#LSP1;Cha3 - San Pol de Mar 1;spain;madrid;;',
'loc;#LTEF;Teatro Figaro;spain;madrid;;',
'rol;cantante;Giselle',
'rol;dj;Maurice Gambra;fb',
'url;COM;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/434643271_437246768699546_3879583118828022496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JkNkpK0pmpcAb46fOTs&_nc_ht=scontent-mad1-1.xx&oh=00_AfCHYFbmwcLLbzeJ72yPoxZ81wpCPP2Ckw_QdMKh_737yw&oe=661CB621',
'url;MJB;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/435504957_10161992650869887_6442053030514325612_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M9D-gj87vwgAb6r7EDu&_nc_ht=scontent-mad2-1.xx&oh=00_AfD4m_g2HcZjuncOUENbtTDZMr9-GOxdk3cDNDdaaQ1PkQ&oe=661D9035',
'url;MLM;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/423715845_10228263350042104_5816934928804056804_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MqfidxizJK4Ab4w9ccY&_nc_ht=scontent-mad2-1.xx&oh=00_AfCyEGPS2M_pyc9vAiKl0YunHGNhk7OdEK9xV2ymdIsQuw&oe=661EEE00',
'url;MLP;https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/243127735_114049024360157_8888281751793754462_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KF5slLPC94UAb4nQ23U&_nc_ht=scontent-mad1-1.xx&oh=00_AfAfiDqgg0w282bJQXsstTnIIx19xNdStOn0GB3yf-1AYg&oe=661D7012',
'url;MSL;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/345860627_924929292160064_373345481708041347_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7f9hxKinKToAb694zPM&_nc_ht=scontent-mad2-1.xx&oh=00_AfDX_LXsqUAQvbFrFT73xpkNpypir7q03p9zs6H-mrXHpg&oe=661ED8D7',
'url;MTR;https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/351509216_1442270843269085_5800243567401483573_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_-eUaV-gv7AAb4yTfQN&_nc_ht=scontent-mad2-1.xx&oh=00_AfDvSfndSuujm3R1X5Cm43DCFFki3TraZOiQu4UWQRcfCg&oe=661EDC46',
];
