var data=[
'act;class;Alejandra Martiñan & Rafael Luna (1/2);#LC14;2024-04-20;19:45;2024-04-20;21:00;0;Andea Venturini;#HAMR',
'act;class;Alejandra Martiñan & Rafael Luna (2/2);#LL19;2024-04-21;18:30;2024-04-21;20:00;0;Andea Venturini;#HAMR',
'act;class;Amarras Taller Iniciacion;#LFR7;2024-04-28;19:00;2024-04-28;20:00;0;Ricardo Quesada;#HAM2',
'act;class;Christian Cerezo & Valentin Arias;#LC14;2024-04-26;19:45;2024-04-26;21:00;0;Loic;#HCCC',
'act;class;Daniel Andrizzi;#LM11;2024-04-02;20:00;2024-04-02;21:00;7;Daniel Andrizzi;#HDAA;https://www.facebook.com/dandrizzi',
'act;class;Edgardo - Sala 2;#LJ08;2024-04-10;19:00;2024-04-10;20:00;7;Maurice Gambra;#HECA',
'act;class;Edgardo - Sala 2;#LJ08;2024-04-27;19:30;2024-04-27;20:30;0;Maurice Gambra;#HECA',
'act;class;Joaquin Martinez;#LJ08;2024-05-13;20:00;2024-05-13;21:00;7;Joaquin Martinez;jma.png',
'act;class;Jorge Ramirez;#LC14;2024-04-11;19:00;2024-04-11;20:00;7;Jorge;#HEAG;https://www.facebook.com/jorge.ramirez.98892',
'act;class;Juanma y Natalia;#LJ08;2024-04-20;19:00;2024-04-20;20:00;0;Maurice Gambra;#HMTG;https://www.juanmaynatalia.com/',
'act;class;Monina Paz;#LJ08;2024-05-18;19:30;2024-05-18;20:30;0;Maurice Gambra;tangoneon.jpg',
'act;livemusic;Duo Anibal y Jimena;#LM28;2024-05-01;22:30;2024-05-01;22:45;0;Gisele y Anibal;anibal.jpg',
'act;livemusic;El Conventiyo - Zenzerro Folklore;#LR22;2024-05-11;20:00;2024-05-12;00:00;0;Pablo y Beatriz;zencerro.jpg',
'act;livemusic;La Coqueta - Proyecto Lunfardo;#LM28;2024-05-15;23:00;2024-05-15;23:15;0;Gisele y Anibal;lunfardo.jpg;https://www.facebook.com/gisele.gongora',
'act;livemusic;La tanda de Giselle y Anibal;#LM28;2024-04-03;22:30;2024-04-03;22:45;7;Gisele y Anibal;#HCOM',
'act;livemusic;No me vengan con milongas;#LCS1;2024-04-12;21:30;2024-04-12;23:00;0;Jimena González;',
'act;livemusic;Quinteto Taller Galvan;#LC14;2024-05-12;19:00;2024-05-12;22:00;0;Jorge y Nelida;galvan.jpg;https://www.facebook.com/jorge.ramirez.98892',
'act;livemusic;Tanda Al Sur duo;#LJ08;2024-04-08;22:30;2024-04-08;22:45;0;Maurice Gambra;',
'act;milonga;Che Bandoneón - DJ Maurice;#LJ08;2024-04-27;20:30;2024-04-28;00:00;0;Maurice Gambra;#HECA',
'act;milonga;El Aguante - DJ Jorge Ramirez;#LC14;2024-04-11;20:00;2024-04-11;23:00;7;Jorge;#HEAG',
'act;milonga;El Bulin - DJ Maurice;#LJ08;2024-04-22;21:00;2024-04-23;00:30;7;Maurice Gambra;#HECA;https://www.facebook.com/milonga.elbulin',
'act;milonga;El Cachafaz - DJ Maurice;#LJ08;2024-04-10;19:30;2024-04-10;23:30;7;Maurice Gambra;#HECA;https://www.facebook.com/milonga.elbulin',
'act;milonga;El Conventiyo - DJ Pablo;#LR22;2024-04-05;22:00;2024-04-05;02:00;7;Pablo y Beatriz;conventiyo.jpg',
'act;milonga;El Gancho - DJ Maurice;#LJ08;2024-04-07;19:00;2024-04-07;23:00;7;Maurice Gambra;#HECA',
'act;milonga;El Puntazo - DJ Andrea;#LC14;2024-05-18;21:00;2024-05-19;00:30;7;Andea Venturini;#HMLP;https://www.facebook.com/andrea.venturini.92',
'act;milonga;El Puntazo - DJ Gaston Godoy (vinilos);#LC14;2024-05-11;21:00;2024-05-12;00:30;0;Andea Venturini;#HMLP;https://www.facebook.com/andrea.venturini.92',
'act;milonga;La Coqueta de Madrid - DJ Gisele;#LM28;2024-04-03;21:00;2024-04-03;00:00;7;Gisele y Anibal;#HCOM;https://www.facebook.com/gisele.gongora',
'act;milonga;La Escurridiza - DJ Julio;#LJ08;2024-05-06;21:00;2024-05-07;00:30;14;Maurice Gambra;#HLES',
'act;livemusic;La Escurridiza - Tanda en vivo;#LJ08;2024-05-06;22:30;2024-05-07;22:45;14;Maurice Gambra;#HLES',
'act;milonga;La Experimental - DJ He’lga;#LJ08;2024-04-23;21:00;2024-04-24;00:30;28;Maurice Gambra;experimental.jpg',
'act;milonga;La Melange - DJ Loic;#LC14;2024-04-05;21:00;2024-04-06;00:30;7;Loic;#HMLM;https://www.facebook.com/aloisvix',
'act;milonga;La Suerte Loca - DJ Luis Abellan;#LSP1;2024-05-23;22:00;2024-05-24;01:00;7;Luis Abellan;#HMSL',
'act;milonga;La Tangoteca De Golden - DJ Daniel;#LM11;2024-04-02;21:00;2024-04-02;00:00;7;Daniel Andrizzi;#HDAA',
'act;milonga;La Yunta Brava - DJ Ricardo Quesada;#LJ08;2024-04-30;21:30;2024-05-01;00:30;14;Victoria;#HMJB;https://www.facebook.com/yunta.brava.milonga',
'act;milonga;Tangoneón - DJ Armando;#LJ08;2024-05-18;20:30;2024-05-18;23:30;28;Maurice Gambra;tangoneon.jpg',
'act;outdoors;El Templete del Retiro - DJ Julio;#LPDR;2024-04-07;18:30;2024-04-07;22:30;7;Julio Tijero;#HMTR',
'act;outdoors;Puerta del Sol - Ezaquiel y Maria Antonieta;Puerta del Sol;2024-05-11;13:00;2024-05-11;14:00;0;Loic;sol.jpg',
'act;outdoors;Puerta del Sol - Ezequiel y Maria Antonieta;Puerta del Sol;2024-05-11;18:00;2024-05-11;19:00;0;Loic;sol.jpg',
'act;practice;Amarras - DJ Ricardo Quesada;#LFR7;2024-06-09;20:00;2024-06-09;23:30;7;Ricardo Quesada;#HAMA;https://www.facebook.com/profile.php?id=61553270344752',
'act;practice;El Laboratorio;#LD17;2024-04-20;16:00;2024-04-20;19:00;28;Ezequiel y Maria Antonieta;#HEMA;https://www.clasesdetangomadrid.com/',
'act;practice;N`Clave de Tango - Carmen de la Rosa;#LW09;2024-04-28;18:00;2024-04-28;21:00;28;Carmen de la Rosa;clave.jpg;https://www.facebook.com/carmen.delarosa.94043',
'act;practice;Sin Gomina;#LC14;2024-06-02;18:00;2024-06-02;21:00;0;Loic Vix;singomina.jpg;https://www.facebook.com/aloisvix',
'act;show;Adrian Lupi y Anita Escobar;#LC14;2024-05-24;23:00;2024-05-24;23:15;0;Loic Vix;lupi.png',
'act;show;Yanina y Emmanuel;#LC14;2024-06-14;23:00;2024-06-14;23:15;0;Loic Vix;yanina.jpg',
'act;show;Alejandra Martiñan & Rafael Luna;#LC14;2024-04-20;23:15;2024-04-20;23:30;0;Andea Venturini;#HAMR',
'act;show;Alex Moncada & Martina Waldman;#LC14;2024-04-06;23:10;2024-04-06;23:30;0;Andea Victoria;#HAMR',
'act;show;Alexa Yepes & Edwin Espinosa;#LC14;2024-05-18;23:15;2024-05-18;23:30;0;Andea Venturini;yepes.png',
'act;show;Mayi Yepes & Camilo Bernal;#LC14;2024-06-01;23:15;2024-06-01;23:30;0;Andea Venturini;bernal.jpg',
'act;show;Bárbara Carpino & Claudio Forte;#LC14;2024-04-05;23:10;2024-04-05;23:30;0;Loic Vix;',
'act;show;Christian Cerezo & Valentin Arias;#LC14;2024-04-26;23:15;2024-04-26;23:30;0;Loic;cerezo.jpg',
'act;show;Luces de Tango;#LTEF;2024-04-21;12:30;2024-04-21;14:00;0;Claudia;luces.jpg;https://arteyfantasia.eu/espectaculo-luces-de-tango/',
'href;#HXX;under.jpg',
'href;#HLES;escurridiza.jpg',
'href;#HAMA;amarras.jpg',
'href;#HAM2;talleramarras.jpg',
'href;#HAMR;ale.jpg',
'href;#HCOM;coqueta.jpg',
'href;#HDAA;golden.jpg',
'href;#HEAG;aguante.jpg',
'href;#HECA;madridtangoclub.jpg',
'href;#HLDT;luces.jpg',
'href;#HMJB;yunta.jpg',
'href;#HMLP;puntazo.jpg',
'href;#HMSL;suerteloca.jpg',
'href;#HMTR;templete.jpg',
'href;#HMLM;melange.jpg',
'href;#HEMA;laboratorio.jpg',
'loc;#LW09;Profesor Watsman 9;spain;madrid;;',
'loc;#LD17;Casa Granada-Dr.Cortezo 17;spain;madrid;;',
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
