package Itog10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itog10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОказУслуг
 */
@Entity(name = "IISItog10ОказУслуг")
@Table(schema = "public", name = "ОказУслуг")
public class OkazUslug {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВремяКонсульт")
    private Integer времяконсульт;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uslugi")
    @Convert("Uslugi")
    @Column(name = "Услуги", length = 16, unique = true, nullable = false)
    private UUID _uslugiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uslugi", insertable = false, updatable = false)
    private Uslugi uslugi;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dogovor")
    @Convert("Dogovor")
    @Column(name = "Договор", length = 16, unique = true, nullable = false)
    private UUID _dogovorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dogovor", insertable = false, updatable = false)
    private Dogovor dogovor;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetOstVrem")
    @Convert("RaschetOstVrem")
    @Column(name = "РасчетОстВрем", length = 16, unique = true, nullable = false)
    private UUID _raschetostvremid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetOstVrem", insertable = false, updatable = false)
    private RaschetOstVrem raschetostvrem;


    public OkazUslug() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getВремяКонсульт() {
      return времяконсульт;
    }

    public void setВремяКонсульт(Integer времяконсульт) {
      this.времяконсульт = времяконсульт;
    }


}