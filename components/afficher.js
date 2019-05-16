import React, {components} from 'react';
import { StyleSheet,View,ScrollView, TextInput,Text, InputAccessoryView, Button } from 'react-native';
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
        note:'',
        munites:'',
        jours:'',
        hours:'',
        seconds:'',
        restseconder:'',
        restjour:'',
        restheur:'',
        restjour:'',
        restmunite:'',
        evenement:'',
        }

        
    }
    componentDidMount() {
      
        var that = this;
        
        
        var jour = new Date().getDay();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds(); 
      
        
        that.setState({
      
            seconds:sec,
            jours:jour,
            heurs:hours,
            munites:min,
           });

        if (jour>1 && jour<4) {
            this.setState({
                evenement:'-Les jeudis à 2h37'
            })
            
        }
        if (jour>4 && jour<6) {
            this.setState({
                evenement:'-Les samedis à 14h45'
            })
            
        }
        if (jour==4 && hours<2) {
            this.setState({
                evenement:'-Les jeudis à 2h37'
            })
        }
        if (jour==4 && hours==2 && min<=37) {
            this.setState({
                evenement:'-Les jeudis à 2h37'
            })
        }
        if (jour==4 && hours==2 && min>37) {
            this.setState({
                evenement:'-Les samedis à 14h45'
            })
        }
        if (jour==4 && hours>2) {
            this.setState({
                evenement:'-Les samedis à 14h45'
            })
        }
        if (jour==6 && hours<14) {
            this.setState({
                evenement:'-Les samedis à 14h45'
            })
            
        }
        if (jour==6 && hours==14 && min<45) {
            this.setState({
                evenement:'-Les samedis à 14h45'
            })
            
        }
        if (jour==6 && hours==14 && min>45) {
            this.setState({
                evenement:'-Les Lundi a 17h00'
            })
            
        }
        if (jour==6 && hours>14) {
            this.setState({
                evenement:'-Les Lundi a 17h00'
            })
            
        }
        if (jour==1 && hours>17) {
            this.setState({
                evenement:'-Les jeudis à 2h37'
            })
        }
        if (jour==1 && hours<17) {
            this.setState({
                evenement:'-Les Lundi a 17h00'
            })
        }
        if (jour==0) {
            this.setState({
                evenement:'-Les Lundi a 17h00'
            })
        }

        this.setState({
            note:'',
            restheur:'',
            restmunite:'',
            restseconder:'',
            restjour:''
        })
      }
     
      reinitialiser(){
        componentDidMount();
        
      }
    
    
    recherche(jour,heur,munite,Second){
      
        if (jour===1) {
            if (heur<17) {
                this.setState({
                    note:"il reste ",
                    restheur:17-heur+" heure, ",
                    restmunite:59-munite+" minutes et ",
                    restseconder:60-Second+" secondes "
                })
            }
           
            if (heur>=17){
                if (munite<37) {
                    this.setState({
                        restjour:2,
                        restheur:26-heur,
                        restmunite:36-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }
                if (munite>=37) {
                    this.setState({
                        restjour:2+" jour,  ",
                        note:"il reste ",
                        restheur:25-heur+" heure, ",
                        restmunite:96-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }   
                
            }

            
        }
        if (jour===2) {
            if (heur<=2) {
                if (munite<=37) {
                    this.setState({
                        note:"il reste ",
                        restjour:2+" jour,  ",
                        restheur:1+" heure, ",
                        restmunite:36-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>37){
                    this.setState({
                        restjour:1+" jour, ",
                        note:"il reste ",
                        restheur:25-heur+" heure, ",
                        restmunite:96-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                
            }
            if (heur>2){
                if (munite<=37) {
                    this.setState({
                        restjour:1+" jour, ",
                        note:"il reste ",
                        restheur:26-heur+" heure, ",
                        restmunite:36-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>37){
                    this.setState({
                        restjour:1+" jour, ",
                        note:"il reste ",
                        restheur:25-heur+" heure, ",
                        restmunite:96-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                    

            }

            
        }
        if (jour===3) {
            if (heur<=2) {
                if (munite<=37) {
                    this.setState({
                        note:"il reste vv ",
                        restjour:1+" jour,  ",
                        restheur:1+" heure, ",
                        restmunite:36-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>37){
                    this.setState({
                        
                        note:"il reste ",
                        restheur:25-heur+" heure, ",
                        restmunite:96-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                
            }
            if (heur>2){
                if (munite<=37) {
                    this.setState({
                        
                        note:"il reste ",
                        restheur:26-heur+" heure, ",
                        restmunite:36-munite+"minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }else{
                    this.setState({
                       
                        note:"il reste ",
                        restheur:25-heur+" heure, ",
                        restmunite:96-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                    

            }

            
        }
        if (jour===4) {
            
            if (heur<2) {
                if (munite<=37) {
                    this.setState({
                        note:"il reste ",
                        
                        restheur:2-heur+" heure, ",
                        restmunite:36-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>37){
                    this.setState({
                        note:"il reste ",
                        
                        restheur:1-heur+" heure, ",
                        restmunite:96-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                    
                    
                }
                
            }
            if (heur==2) {
                if (munite<37) {
                    this.setState({
                        note:"il reste ",
                        restmunite:36-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                if (munite>=37) {
                    this.setState({
                        restjour:2+" jours ,",
                        note:"il reste ",
                        restheur:14-heur+" heure, ",
                        restmunite:44-munite+"minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                
            }
            if (heur>2 && heur<14) {
                if (munite<=45) {
                    this.setState({
                        restjour:2+" jours ,",
                        note:"il reste ",
                        restheur:14-heur+" heure, ",
                        restmunite:44-munite+"minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>45){
                    this.setState({
                        restjour:2+" jours ,",
                        note:"il reste ",
                        restheur:14-heur+" heure, ",
                        restmunite:104-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                
            }
            if (heur>=14) {
                if (munite<=45) {
                    this.setState({
                        restjour:1+" jours ,",
                        note:"il reste ",
                        restheur:38-heur+" heure, ",
                        restmunite:44-munite+"minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>45){
                    this.setState({
                        restjour:1+" jours ,",
                        note:"il reste ",
                        restheur:38-heur+" heure, ",
                        restmunite:104-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
            }  }
         
        }
        if (jour===5) {
            if (heur<=14) {
                if (munite<=45) {
                    this.setState({
                        note:"il reste ",
                        restjour:1+" jour,  ",
                        restheur:14-heur+" heure, ",
                        restmunite:44-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>45){
                    this.setState({
                        
                        note:"il reste ",
                        restheur:38-heur+" heure, ",
                        restmunite:104-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                
            }
            if (heur>14){
                if (munite<=45) {
                    this.setState({
                        
                        note:"il reste ",
                        restheur:38-heur+" heure, ",
                        restmunite:44-munite+"minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>45){
                    this.setState({
                       
                        note:"il reste ",
                        restheur:44-heur+" heure, ",
                        restmunite:104-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                    

            }

            
        }
        if (jour===6) {
            if (heur<14) {
                if (munite<45) {
                    this.setState({
                        note:"il reste ",
                        
                        restheur:14-heur+" heure, ",
                        restmunite:45-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

                }if (munite>45){
                   
                        this.setState({
                            restjour:2+" jours,",
                            note:"il reste ",
                            restheur:16-heur+" heure, ",
                            restmunite:60-munite+" minutes et ",
                            restseconder:60-Second+" secondes "
                        })
                    
                
                    
                }
                
            }
            if (heur==14) {
                if (munite<45) {
                    this.setState({
                        note:"il reste ",
                        restmunite:44-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                if (munite>=45) {
                    this.setState({
                        restjour:2+" jours ,",
                        note:"il reste ",
                        restheur:17-heur+" heure, ",
                        restmunite:munite-1+"minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                }
                
            }
        
            if (heur>14 && heur<17) {
                
                    
                    this.setState({
                        restjour:2+" jours ,",
                        note:"il reste ",
                        restheur:17-heur+" heure, ",
                        restmunite:60-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
                
                
            }
            if (heur>=17) {
                
                    this.setState({
                        restjour:1+" jours ,",
                        note:"il reste ",
                        restheur:40-heur+" heure, ",
                        restmunite:60-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })
            }  
         
        }
        if (jour===0) {
            if (heur<=17) {
            
                    this.setState({
                        note:"il reste ",
                        restjour:1+" jour,  ",
                        restheur:16-heur+" heure, ",
                        restmunite:59-munite+" minutes et ",
                        restseconder:60-Second+" secondes "
                    })

            }
            if (heur>17){
               
            this.setState({
                
                note:"il reste ",
                restheur:40-heur+" heure, ",
                restmunite:59-munite+"minutes et ",
                restseconder:60-Second+" secondes "
            })
            

            }

            
        }

    }
    render() {
        const inputAccessoryViewID = "uniqueID";
      return (
        <View style={style.view}>
             <Text>Date de l'Evenement:</Text>
             <Text> {this.state.evenement}</Text>
             
               <Button
              style={style.title}
                onPress={() =>this.recherche(this.state.jours,this.state.heurs,this.state.munites,this.state.seconds)}
               title="Afficher temps restant "
               />
               <Text>{this.state.note} 
                     {this.state.restjour}  
                     {this.state.restheur}
                     {this.state.restmunite}
                     {this.state.restseconder}
                     
                    </Text>
               
            <Button
              style={style.title}
                onPress={() =>this.  componentDidMount()}
               title="reinitialiser"
               />
             </View>
        
        )

    }
  }
  const style = StyleSheet.create({
    title:{
        fontSize:22,
        marginTop:70,
        marginLeft:10,
        color: 'blue',
        fontWeight: 'bold',
        backgroundColor: '#DF0101'
      },
    view:{
        marginTop:80,
        marginLeft:40,
    },
    input:{
        height:40,
        width:240,
        borderColor:'gray',
        borderWidth:2,
        marginTop:40
    }
})